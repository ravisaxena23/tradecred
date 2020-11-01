import React, { useState } from "react";
import Info from "./Info";

const Vendor = () => {
  const [data, setData] = useState({
    invoiceNumber: "",
    documentNumber: "",
    type: "",
    netDueDt: "",
    docDate: "",
    pstngDate: "",
    amtInLocCur: "",
    vendorCode: "",
    vendorName: "",
    vendorType: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const {
    invoiceNumber,
    documentNumber,
    type,
    netDueDt,
    docDate,
    amtInLocCur,
    vendorCode,
    vendorName,
    vendorType,
  } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const d = {
        'Invoice Numbers': invoiceNumber,
        'Document Numbers': documentNumber,
        'type': type.toUpperCase(),
        'Net due dt': netDueDt,
        'Doc. Date': docDate,
        'Pstng Date':
          new Date().getDate() +
          "-" +
          new Date().getMonth() +
          "-" +
          new Date().getFullYear(),
          'Amt in loc.cur.': amtInLocCur,
          'Vendor Code': vendorCode.toUpperCase(),
          'Vendor name': vendorName,
        'vendor type': vendorType,
      };
      const response = await fetch("http://localhost:5000/excel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(d),
      });
      await response.json();
      setData({
        ...data,
        invoiceNumber: "",
        documentNumber: "",
        type: "",
        netDueDt: "",
        docDate: "",
        pstngDate: "",
        amtInLocCur: "",
        vendorCode: "",
        vendorName: "",
        vendorType: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div class="card">
        <div class="card-header">Add Invoice</div>
        <div class="container-fluid">
          <form
            onSubmit={handleSubmit}
            style={{ marginTop: 20 }}
            method="POST"
            action="/excel"
          >
            <div class="row">
              <div class="col-md-4 col-xs-12">
                <div class="form-group">
                  <div class="row">
                    <div class="col-4">
                      <label>Invoice Number</label>
                    </div>
                    <div class="col-8">
                      <input
                        type="number"
                        class="form-control"
                        name="invoiceNumber"
                        value={invoiceNumber}
                        onChange={handleChange}
                         
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-xs-12">
                <div class="form-group">
                  <div class="row">
                    <div class="col-4">
                      <label>Document Number</label>
                    </div>
                    <div class="col-8">
                      <input
                        type="number"
                        class="form-control"
                        name="documentNumber"
                        value={documentNumber}
                        onChange={handleChange}
                         
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-xs-12">
                <div class="form-group">
                  <div class="row">
                    <div class="col-4">
                      <label>Type</label>
                    </div>
                    <div class="col-8">
                      <input
                        type="text"
                        class="form-control"
                        name="type"
                        value={type}
                        onChange={handleChange}
                        style={{ textTransform: "uppercase" }}
                         
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4 col-xs-12">
                <div class="form-group">
                  <div class="row">
                    <div class="col-4">
                      <label>Net Due Date</label>
                    </div>
                    <div class="col-8">
                      <input
                        type="Date"
                        class="form-control"
                        name="netDueDt"
                        value={netDueDt}
                        onChange={handleChange}
                         
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-xs-12">
                <div class="form-group">
                  <div class="row">
                    <div class="col-4">
                      <label>Net Due Date</label>
                    </div>
                    <div class="col-8">
                      <input
                        type="Date"
                        class="form-control"
                        name="docDate"
                        value={docDate}
                        onChange={handleChange}
                         
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-xs-12">
                <div class="form-group">
                  <div class="row">
                    <div class="col-4">
                      <label>Amount</label>
                    </div>
                    <div class="col-8">
                      <input
                        type="number"
                        class="form-control"
                        name="amtInLocCur"
                        value={amtInLocCur}
                        onChange={handleChange}
                         
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4 col-xs-12">
                <div class="form-group">
                  <div class="row">
                    <div class="col-4">
                      <label>vendor Code</label>
                    </div>
                    <div class="col-8">
                      <input
                        type="text"
                        class="form-control"
                        name="vendorCode"
                        value={vendorCode}
                        onChange={handleChange}
                        style={{ textTransform: "uppercase" }}
                         
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-xs-12">
                <div class="form-group">
                  <div class="row">
                    <div class="col-4">
                      <label>vendor Name</label>
                    </div>
                    <div class="col-8">
                      <input
                        type="text"
                        class="form-control"
                        name="vendorName"
                        value={vendorName}
                        onChange={handleChange}
                         
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-xs-12">
                <div class="form-group">
                  <div class="row">
                    <div class="col-4">
                      <label>vendor Type</label>
                    </div>
                    <div class="col-8">
                      <input
                        type="text"
                        class="form-control"
                        name="vendorType"
                        value={vendorType}
                        onChange={handleChange}
                         
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-danger"
                style={{ margin: "auto", marginBottom: 20 }}
                 
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Info />
    </div>
  );
};

export default Vendor;
