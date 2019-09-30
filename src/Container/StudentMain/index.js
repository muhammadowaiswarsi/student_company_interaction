import React from 'react'
import StudentMain from '../../Component/StudentMain';
import { Query } from "react-apollo";
import { AppSync } from "./../../Config/graphql-config";
import "./index.css";
import { connect } from "react-redux";
import routeAction from "./../../store/actions/routeAction"
import { logout } from "./../../Service/AuthService";
import { getStudentData, getCompanies } from "./../../Config/Queries"


class StudentMainContainer extends React.Component {


    logout = () => {
        logout()
            .then((res) => {
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
                    variables={{ StudentID: this.props.user.user_id }}
                >
                    {({ loading, error, data }) => {
                        let currentUser = data && data.getStudentData
                        return (
                            <Query
                                fetchPolicy="network-only"
                                client={AppSync}
                                query={getCompanies}
                                variables={{ StudentID: this.props.user.user_id }}
                            >
                                {({ loading, error, data }) => {
                                    let CompaniesData = data.getCompanies
                                    return (
                                        < StudentMain logout={this.logout} CompaniesData={CompaniesData} currentUser={currentUser} />
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
        authed: (flag) => { dispatch(routeAction.authed(flag)) },
    }
}

const mapStatetoProp = state => {
    return {
        user: state.routeReducer.user
    }
}


export default connect(mapStatetoProp, mapDispatchToProp)(StudentMainContainer);