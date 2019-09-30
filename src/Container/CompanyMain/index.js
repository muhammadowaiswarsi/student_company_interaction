import React from 'react'
import CompanyMain from '../../Component/CompanyMain';
import "./index.css";
import { Query } from "react-apollo";
import { getCompanyData, getStudents } from "./../../Config/Queries"
import { AppSync } from "./../../Config/graphql-config"

class CompanyMainContainer extends React.Component {

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
                                        <CompanyMain StudentsData={StudentsData} currentUser={currentUser} />
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

export default CompanyMainContainer;