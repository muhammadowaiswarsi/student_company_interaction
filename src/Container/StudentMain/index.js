import React from 'react'
import StudentMain from '../../Component/StudentMain';
import { Query } from "react-apollo";
import { AppSync } from "./../../Config/graphql-config"
import "./index.css";
import { getStudentData, getCompanies } from "./../../Config/Queries"

class StudentMainContainer extends React.Component {

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
                                        < StudentMain CompaniesData={CompaniesData} currentUser={currentUser} />
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

export default StudentMainContainer;