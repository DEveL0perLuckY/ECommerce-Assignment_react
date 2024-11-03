import React from "react";
const Pricing = () => {
  return (
    <div className="container py-3">
      <main>
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal">Membership Plans</h1>
          <p className="fs-5 text-muted">
            Choose the plan that suits your learning journey. Explore the
            features and get started!
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Free</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $0<small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Basic Demo</li>
                  <li>No exams</li>
                  <li>No Certificate</li>
                </ul>
                <button type="button" className="w-100 btn btn-outline-dark">
                  Sign up for free
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $15<small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Complete course</li>
                  <li>Priority email support</li>
                  <li>Test and Exam access</li>
                </ul>
                <button type="button" className="w-100 btn btn-secondary">
                  Get started
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-secondary">
              <div className="card-header py-3 text-white bg-secondary border-secondary">
                <h4 className="my-0 fw-normal">Expert</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $29<small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>All resources</li>
                  <li>Phone and email support</li>
                  <li>Certificate with exams</li>
                </ul>
                <button type="button" className="w-100 btn btn-secondary">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2 className="display-6 text-center mb-4">Compare plans</h2>

        <div className="table-responsive">
          <table className="table text-center">
            <thead>
              <tr>
                <th style={{ width: "34%" }}></th>
                <th style={{ width: "22%" }}>Free</th>
                <th style={{ width: "22%" }}>Pro</th>
                <th style={{ width: "22%" }}>Expert</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-start">
                  Demo
                </th>
                <td>
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#check" />
                  </svg>
                </td>
                <td>
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#check" />
                  </svg>
                </td>
                <td>
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#check" />
                  </svg>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Priority Support
                </th>
                <td>
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#x" />
                  </svg>
                </td>
                <td>
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#check" />
                  </svg>
                </td>
                <td>
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#check" />
                  </svg>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Test and Exam Access
                </th>
                <td>
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#x" />
                  </svg>
                </td>
                <td>
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#check" />
                  </svg>
                </td>
                <td>
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#check" />
                  </svg>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  All Resources
                </th>
                <td>
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#x" />
                  </svg>
                </td>
                <td>
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#x" />
                  </svg>
                </td>
                <td>
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#check" />
                  </svg>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Certificate with Exams
                </th>
                <td>
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#x" />
                  </svg>
                </td>
                <td>
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#x" />
                  </svg>
                </td>
                <td>
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#check" />
                  </svg>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
