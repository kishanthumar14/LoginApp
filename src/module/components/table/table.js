import React, { Component } from 'react';
import { Table, InputGroup, FormControl, Row } from 'react-bootstrap';
import TableWrapper from "./zsTableStyle";

class ZsTable extends Component {

    state = {
        tableData: [],
        rowCount: 10,
        defaultPage: 0,
        totalPage: 0,
        asc: true,
        i: 0,

    }

    componentDidMount = () => {
        let abc = [];
        for (let i = 0; i < this.props.dataSource.length / this.state.rowCount; i++) {
            abc.push(this.props.dataSource);
        }
        this.setState({ tableData: abc, totalPage: Math.ceil(this.props.dataSource.length / this.state.rowCount) });
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        let update = {}

        if (nextProps.dataSource) {
            let abc = [];
            for (let i = 0; i < nextProps.dataSource.length / prevState.rowCount; i++) {
                abc.push(nextProps.dataSource);
            }
            update.tableData = abc;

        }

        return Object.keys(update).length === 0 ? null : update;
    }

    handleChange() {
        this.props.onUserInput(this.refs.filterSearchInput.value);
    }

    sortTable(type, column) {
        var table;
        table = document.getElementById("sortTable");
        var rows, i, x, y, count = 0;
        var switching = true;

        var direction = type;

        while (switching) {
            switching = false;
             rows = table.rows;

            for (i = 1; i < (rows.length - 1); i++) {
                var Switch = false;
                x = rows[i].getElementsByTagName("TD")[column];
                y = rows[i + 1].getElementsByTagName("TD")[column];

                if (direction === "ascending") {
                    this.setState({ asc: false, i: column })
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        Switch = true;
                        break;
                    }
                } else if (direction === "descending") {
                    this.setState({ asc: true, i: column })
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        Switch = true;
                        break;
                    }
                }
            }
            if (Switch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                count++;
            } else {
                if (count === 0 && direction === "ascending") {
                    direction = "descending";
                    switching = true;
                }
                if (count === 0 && direction === "descending") {
                    direction = "ascending";
                    switching = true;
                }
            }
        }
    }

    render() {

        const { columns = [], dataSource = [], search = false, filterSearchData = "", searchColumn = "" } = this.props;
        const { tableData, defaultPage, asc } = this.state;
        var inputData = [];
        if (filterSearchData) {
            if (filterSearchData !== undefined) {

                dataSource.map(function (product) {
                    if (product[searchColumn].toLowerCase().includes(filterSearchData.toLowerCase()) || filterSearchData === "") {
                        inputData.push(product)
                    }
                    return inputData;
                })
            }
            else {
                inputData = dataSource;
            }
        }
        return (
            <TableWrapper>
                <Row>
                    <div className="tableHeader">
                        {search === true ?
                            <div className="searchBar">
                                <InputGroup className="mb-3" style={this.props.style} >
                                    <FormControl
                                        className={this.state.searchselect === true ? "siwidth" : "sihwidth"}
                                        placeholder={"Search" + "  "+ searchColumn}
                                        ref="filterSearchInput"
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </InputGroup>
                            </div>
                            : null}
                    </div>
                </Row>
                <Table responsive id="sortTable">
                    <thead>
                        <tr>
                            {columns.map((d, i) => (
                                <th style={d.className} key={i}>
                                    {d.sorting ?
                                        <span>{d.text}
                                            <span>

                                                {this.state.i === i && asc ?
                                                    <span className="fa fa-long-arrow-up" onClick={() => this.sortTable("ascending", i)} style={{ paddingLeft: "7px", fontSize: "small", cursor: "pointer" }}></span>
                                                    :
                                                    <span className="fa fa-long-arrow-down" onClick={() => this.sortTable("descending", i)} style={{ paddingLeft: "7px", fontSize: "small", cursor: "pointer" }}></span>
                                                }
                                            </span>

                                        </span>
                                        : d.text}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    {filterSearchData ?
                        <tbody>
                            {inputData.length > 0 ?
                                inputData.map((d, i) => (
                                    <tr key={i} >
                                        {columns.map((c, j) => (
                                            <td key={j} style={c.className} className="cut-text">{c.render(d)}</td>
                                        ))}
                                    </tr>
                                ))
                                : <tr><td><span>No data found.</span></td></tr>}
                        </tbody> :
                        <tbody>
                            {tableData[defaultPage] && tableData[defaultPage].map((d, i) => (
                                <tr key={i} >
                                    {columns.map((c, j) => (
                                        <td key={j} style={c.className} className="cut-text">{c.render(d)}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>}
                </Table>
            </TableWrapper>
        )
    }

}

export default ZsTable;
