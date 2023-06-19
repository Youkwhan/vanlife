/* React-router changed the way they check a response in versions  >6.4.4. MirageJS uses a package called pretender.js that uses a polyfill response object (basically a fake response). React-router's versions ABOVE 6.4.4 check to make sure that the response has a body property that is anything other than undefined. Pretender is not spec compliant (they don't follow the rules) so no body is present in the response that redirect creates because pretender patches the redirect response too. It fails react-router's check and gets thrown as an error.  */
// SOlution downgrade react-router-dom to 6.4.4 or 6.4.3. OR migrate to db and remove mirage.js!
import { redirect } from "react-router-dom"

function mutateResponse(path) {
	const response = redirect(path)
	response.body = true
	return response
}

export { mutateResponse as redirect }
