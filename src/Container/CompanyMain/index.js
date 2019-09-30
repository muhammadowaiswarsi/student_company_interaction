import React from 'react'
import CompanyMain from '../../Component/CompanyMain';
import "./index.css";
import { connect } from "react-redux";
import { Query } from "react-apollo";
import routeAction from "./../../store/actions/routeAction"
import { logout } from "./../../Service/AuthService";
import { getCompanyData, getStudents } from "./../../Config/Queries"
import { AppSync } from "./../../Config/graphql-config"


class CompanyMainContainer extends React.Component {

    logout = () => {
        console.log("asfas")
        logout()
            .then((res) => {
                console.log(res)
                this.props.authed(false)
                this.props.history.push("/")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="MainContainer">
                <Query
                    fetchPolicy="network-only"
                    client={AppSync}
                    query={getCompanyData}
                    variables={{ companyID: `9a589299-9d16-4027-9b15-36ff6fc6c48f` }}
                >
                    {({ loading, error, data }) => {
                        let currentUser = data && data.getCompanyData
                        return (
                            <Query
                                fetchPolicy="network-only"
                                client={AppSync}
                                query={getStudents}
                                variables={{ companyID: `123456` }}
                            >
                                {({ loading, error, data }) => {
                                    let StudentsData = data.getStudents
                                    return (
                                        <CompanyMain logout={this.logout()} StudentsData={StudentsData} currentUser={currentUser} />
                                    )
                                }}
                            </Query>
                        )
                    }}
                </Query>
            </div>
        )
    }
}


const mapDispatchToProp = dispatch => {
    return {
        authed: (flag) => { dispatch(routeAction.authed(flag)) }
    }
}

export default connect(null, mapDispatchToProp)(CompanyMainContainer);