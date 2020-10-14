// const { exec } = require("child_process");
const fsExtra = require("fs-extra");
const path = require("path");
const execSync = require("child_process").execSync;
const chalk = require("chalk");
// eslint-disable-next-line no-console
const log = console.log;
const pkg = require("../package.json");

function exec(cmd) {
    execSync(cmd, { stdio: "inherit", env: process.env });
}

function run(command) {
    log(chalk.white.bgBlue.bold(` Started : ${command}`));

    exec(command, (error, stdout, stderr) => {
        if (error) {
            log(`got error: ${error.message}`);
            return;
        }
        if (stderr) {
            log(`stderr: ${stderr}`);
            return;
        }
    });

    log(chalk.white.bgBlue.bold(` Finished : ${command}`));
    log("\n");
}

const cwd = process.cwd();

const docsDir = path.join(__dirname + "/../docs");
const rootDir = path.join(__dirname + "/../");
const websiteDir = path.resolve(__dirname + "/../website");
const websiteBuildDir = path.resolve(__dirname + "/../website/public");

fsExtra.emptyDirSync(docsDir);

// build package again
run("npm run build");

// go to website folder
process.chdir(websiteDir);

// [website] - run clean install
run("npm ci");

// [website] - clean
run("npm run clean");

// [website] - build
run("npm run build-path");

// change working folder
process.chdir(cwd);

// copy build files to docs folder
fsExtra.copySync(websiteBuildDir, docsDir);

// switch to root folder
process.chdir(rootDir);

// add commit
run(`git add -- ./docs`);

run(`git commit -m "updating website docs"`);

run(`git push origin master`);

log(chalk.white.bgBlue.bold("Pushed updated site to master/docs"));
log(chalk.green(`Published at : ${pkg.homepage}`));

log("\n");
