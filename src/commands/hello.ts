import {Command, flags} from '@oclif/command'
import chalk from 'chalk'
export default class Hello extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ dev-cli hello
hello world from ./src/hello.ts!
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {flags} = this.parse(Hello)

    const name = flags.name ?? 'world'
    this.log(chalk`{blue hello ${name} from ${__dirname}}`)
    if (flags.force) {
      this.log('you input --force')
    }
  }
}
