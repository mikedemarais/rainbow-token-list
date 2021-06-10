/**
 * @fileoverview
 * Absurdly, TSDX does not support multiple entry points, so the same file that
 * exports { write } (as a library) would also have to be the same file that
 * parses process.argv for the Commander library if we wanted to make this a
 * CLI.
 *
 * Because there is no way to detect if the file is being imported at runtime or
 * loaded by NextJS's CLI, it is impossible for us to write a TSDX package which
 * reads commands from argv if you *don't* want it to happen when you're
 * importing the package from another script.
 *
 * So here's a vanilla JS file that loads { write } from the output script and
 * calls it manually. It's not pretty, but it works.
 */

/**
 * Build and write to local directory.
 */
import { write } from '../dist/index.js'
write();