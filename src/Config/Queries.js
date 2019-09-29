import gql from "graphql-tag";


const signupStudent = gql`
mutation signupStudent(
 $firstName: String,
 $lastName: String,
 $email: AWSEmail,
 $city: String,
 $state: String,
 $student_id: ID
){signupStudent(input: {
    firstName: $firstName,
    lastName: $lastName,
    email: $email,
    city: $city,
    state: $state,
    student_id: $student_id
}){
    firstName
	lastName
	email
	city
	state
	student_id
}
}
`

export { signupStudent };