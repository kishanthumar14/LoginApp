import React, { Component } from 'react'
import Table from './../../components/table/table';
import moment from 'moment';
import { connect } from "react-redux";
import userActions from './../../../core/users/userActions'
import { UserTableWrapper } from './userStyle';
export class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tableData: [],
            filterText:"",
            loading:false
        }
    }
    componentDidMount() {
        this.props.getUsersAction("1");
        this.setState({ mounted: true });
        this.setState({loading:true})
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let update = {};
        switch (nextProps.userActions.type) {
            case "GET_ALL_USERS_SUCCESS":
                update.tableData = nextProps.userActions.data;
                update.loading=false
                nextProps.fakeAction();
                break;
            case "GET_ALL_USERS_ERROR":
                nextProps.fakeAction();
                break;
            default:
        }
        return Object.keys(update).length === 0 ? null : update;
    }

    handleUserInput(filterText) {
        this.setState({ filterText: filterText });
      };
    render() {
        const { tableData ,loading} = this.state;
        
        const columns = [
            {
                key: "cardType",
                text: "CardType",
                className: {textAlign: "center" },
                render: object => <span>{object["cardType"]}</span>
            },
            {
                key: "type",
                text: "Type",
                className: {textAlign: "center" },
                render: object => <span>{object["type"]}</span>
            },
            {
                key: "customerName",
                text: "customerName",
                className: {textAlign: "center" },
                render: object => <span>{object["customerName"]}</span>
            },
            
            {
                key: "customerNumber",
                text: "customerNumber",
                className: {textAlign: "center" },
                render: object => <span>{object["customerNumber"]}</span>
            },
            {
                key: "orderStatus",
                text: "customerNumber",
                className: {textAlign: "center" },
                render: object => <span>{object["orderStatus"]}</span>
            },
            {
                key: "createdAt",
                text: "createdAt",
                // sorting: true,//due to data more If you use tha data entry must be less than 50
                className: {textAlign: "center" },
                render: object => <span>{moment(object["createdAt"]).format("YYYY-MM-DD, HH:mm")}</span>
            },
        ];
        return (
            <UserTableWrapper>
               <div className="groupListContainer">
               {loading ? <i className="fa fa-spinner fa-spin" size="sm"></i> :
                    <div className="groupTableContainer">
                        <Table
                            columns={columns}
                            dataSource={tableData}
                            search={true}
                            filterSearchData={this.state.filterText}
                            searchColumn="customerNumber"
                            onUserInput={this.handleUserInput.bind(this)}
                        />
                        {this.state.tableData.length < 1 && <div>No Data</div>}
                    </div>}
                </div>
            </UserTableWrapper >);
    }
}



export default connect(
    state => ({
        ...state.userReducer
    }),
    {
        ...userActions
    }
)(Users)

