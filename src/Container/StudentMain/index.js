import React from 'react'
import StudentMain from '../../Component/StudentMain';
import { Query } from "react-apollo";
import { AppSync } from "./../../Config/graphql-config"
import "./index.css";
import routeAction from "./../../store/actions/routeAction"
import { logout } from "./../../Service/AuthService";
import { getStudentData, getCompanies } from "./../../Config/Queries"
import { connect } from "react-redux"


class StudentMainContainer extends React.Component {


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
                    query={getStudentData}
                    variables={{ StudentID: `123456` }}
                >
                    {({ loading, error, data }) => {
                        let currentUser = data && data.getStudentData
                        return (
                            <Query
                                fetchPolicy="network-only"
                                client={AppSync}
                                query={getCompanies}
                                variables={{ StudentID: `123456` }}
                            >
                                {({ loading, error, data }) => {
                                    let CompaniesData = data.getCompanies
                                    return (
                                        < StudentMain logout={this.logout()} CompaniesData={CompaniesData} currentUser={currentUser} />
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

export default connect(null, mapDispatchToProp)(StudentMainContainer);