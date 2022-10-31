import {message, danger} from "danger"
import { keepachangelog } from 'danger-plugin-keepachangelog'
import lighthouse from 'danger-plugin-lighthouse'

const modifiedMD = danger.git.modified_files.join("- ")
message("Changed Files in this PR: \n - " + modifiedMD)

keepachangelog()
lighthouse()
