import React from "react";
import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { getUserDetail } from "../actions/userAction";
import { Table } from "reactstrap";

const DetailUserComponent = (props) => {
  return (
    <div>
      <Table size="sm" striped>
        <tbody>
          <tr>
            <td width="200">Nama</td>
            <td width="20">:</td>
            <td>{props.getUserDetail.nama}</td>
          </tr>
          <tr>
            <td width="200">Alamat</td>
            <td width="20">:</td>
            <td>{props.getUserDetail.alamat}</td>
          </tr>
          <tr>
            <td width="200">Umur</td>
            <td width="20">:</td>
            <td>{props.getUserDetail.umur} Tahun</td>
          </tr>
          <tr>
            <td width="200">No. Handphone</td>
            <td width="20">:</td>
            <td>{props.getUserDetail.noHp}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};

export default connect(mapStateToProps, null)(DetailUserComponent);
