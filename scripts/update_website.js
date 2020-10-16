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
    log(chalk.white.bgBlue.bold(`[info] started - ${command}`));

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

    log(chalk.white.bgBlue.bold(`[info] finished - ${command}`));
    log("\n");
}

const cwd = process.cwd();

const docsDir = path.join(__dirname + "/../docs");
const rootDir = path.join(__dirname + "/../");
const websiteDir = path.resolve(__dirname + "/../website");
const websiteBuildDir = path.resolve(__dirname + "/../website/public");

fsExtra.emptyDirSync(docsDir);

// pull latest changes from master
log(chalk.white.bgBlue(`[info] pull latest changes from master`));
run(`git pull origin master`);

// build package again
run("npm run build");

// go to website folder
process.chdir(websiteDir);
log(chalk.white.bgBlue(`[info] change directory to website`));

// [website] - run clean install
run("npm ci");

// [website] - clean
run("npm run clean");

// [website] - build
run("npm run build-path");

// change working folder
process.chdir(cwd);
log(chalk.white.bgBlue(`[info] change directory to root`));

// copy build files to docs folder
fsExtra.copySync(websiteBuildDir, docsDir);

// switch to root folder
process.chdir(rootDir);

// add commit
run(`git add -- ./docs`);

run(`git commit -m "docs: update demo website"`);

run(`git push origin master`);

log(chalk.white.bgBlue.bold("Pushed updated site to master/docs"));
log(chalk.green(`Published at : ${pkg.homepage}`));

log("\n");
