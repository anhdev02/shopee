import React from 'react'

const CreateRole = () => {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
    <h4 className="fw-bold py-3 mb-4">Thêm vai trò mới</h4>
    <div className="row">
      <div className="col-xl-12">
        {/* HTML5 Inputs */}
        <div className="card mb-4">
          <div className="card-body">
            <div className="mb-3 row">
              <label
                htmlFor="html5-text-input"
                className="col-md-2 col-form-label"
              >
                Tên vai trò
              </label>
              <div className="col-md-10">
                <input
                  className="form-control"
                  type="text"
                  id="html5-text-input"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="html5-text-input"
                className="col-md-2 col-form-label"
              >
                Các quyền
              </label>
              <div style={{display:'flex', justifyContent: 'space-around'}} className="col-md-10">
                      <div className="input-group-text">
                          <input
                          className="form-check-input mt-0"
                          checked
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                          />
                          <label style={{marginLeft:'15px'}} className="col-form-label">
                              Người dùng
                          </label>
                      </div>
                      <div className="input-group-text">
                          <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                          />
                          <label style={{marginLeft:'15px'}} className="col-form-label">
                              Người dùng
                          </label>
                      </div>
                      <div className="input-group-text">
                          <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                          />
                          <label style={{marginLeft:'15px'}} className="col-form-label">
                              Người dùng
                          </label>
                      </div>
                      <div className="input-group-text">
                          <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                          />
                          <label style={{marginLeft:'15px'}} className="col-form-label">
                              Điều hành
                          </label>
                      </div>
                      <div className="input-group-text">
                          <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                          />
                          <label style={{marginLeft:'15px'}} className="col-form-label">
                              Quản trị viên
                          </label>
                      </div>
                      <div className="input-group-text">
                          <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                          />
                          <label style={{marginLeft:'15px'}} className="col-form-label">
                              Người bán
                          </label>
                      </div>
              </div>
            </div>
            <div className="mb-3 row">
              <div className="col-md-2"></div>
              <div className="col-md-10">
                <button
                  style={{ marginRight: "20px" }}
                  type="button"
                  className="btn btn-success"
                >
                  Lưu
                </button>
                <button type="button" class="btn btn-dark">
                  Hủy
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* File input */}
      </div>
    </div>
  </div>
  )
}

export default CreateRole