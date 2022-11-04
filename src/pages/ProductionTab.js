import React, { useState } from "react";
import FormRow from "../components/FormRow";
import styled from "styled-components";

function MemberRegisterTabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <Wrapper>
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Primary Item Issue
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            BD
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Label
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            Packing
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <h3>Main Branch</h3>
            <form>
              <h4 className="title">Employee NIC : </h4>
              <FormRow
                type="name"
                name="name"
                // value={values.name}
                // handleChange={handleChange}
                horizontal
                placeholder="123456V"
                className="input"
              />
              <h4 className="title">Date : </h4>
              <FormRow
                type="name"
                name="link"
                // value={values.link}
                // handleChange={handleChange}
                horizontal
                placeholder="2022/07/12"
                className="input"
              />
              <h4 className="title">Branch Number : </h4>
              <FormRow
                type="name"
                name="email"
                // value={values.email}
                // handleChange={handleChange}
                horizontal
                placeholder="B10"
                className="input"
              />
              <h4 className="title">Kola Quantity : </h4>
              <FormRow
                type="name"
                name="password"
                // value={values.password}
                // handleChange={handleChange}
                horizontal
                placeholder="10"
                className="input"
              />
              <h4 className="title">Kola Price : </h4>
              <FormRow
                type="name"
                name="password"
                // value={values.password}
                // handleChange={handleChange}
                horizontal
                placeholder="10"
                className="input"
              />
              <h4 className="title">Dunola Quantity : </h4>
              <FormRow
                type="name"
                name="password"
                // value={values.password}
                // handleChange={handleChange}
                horizontal
                placeholder="10"
                className="input"
              />
              <h4 className="title">Dunola Price : </h4>
              <FormRow
                type="name"
                name="password"
                // value={values.password}
                // handleChange={handleChange}
                horizontal
                placeholder="10"
                className="input"
              />
              <h4 className="title">Nul : </h4>
              <FormRow
                type="name"
                name="password"
                // value={values.password}
                // handleChange={handleChange}
                horizontal
                placeholder="10"
                className="input"
              />
              <h4 className="title">Other : </h4>
              <FormRow
                type="name"
                name="password"
                // value={values.password}
                // handleChange={handleChange}
                horizontal
                placeholder="10"
                className="input"
              />
              <br />
              <button className="btn btn-submit" type="submit">
                submit
              </button>
            </form>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <h3>Agent</h3>
            <form>
              <h4 className="title">Agent Name : </h4>
              <FormRow
                type="name"
                name="name"
                // value={values.name}
                // handleChange={handleChange}
                horizontal
                placeholder="Udaya"
                className="input"
              />
              <h4 className="title">Agent NIC : </h4>
              <FormRow
                type="name"
                name="link"
                // value={values.link}
                // handleChange={handleChange}
                horizontal
                placeholder="2345646467V"
                className="input"
              />
              <h4 className="title">Agent Mobile : </h4>
              <FormRow
                type="name"
                name="email"
                // value={values.email}
                // handleChange={handleChange}
                horizontal
                placeholder="0777364010"
                className="input"
              />
              <h4 className="title">Agent Location : </h4>
              <FormRow
                type="name"
                name="password"
                // value={values.password}
                // handleChange={handleChange}
                horizontal
                placeholder="address"
                className="input"
              />
              <h4 className="title">Branch Number : </h4>
              <FormRow
                type="name"
                name="password"
                // value={values.password}
                // handleChange={handleChange}
                horizontal
                placeholder="Br:20"
                className="input"
              />
              <br />
              <button className="btn btn-submit" type="submit">
                submit
              </button>
            </form>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <h3>Label</h3>
            <form>
              <h4 className="title">Employee Name : </h4>
              <FormRow
                type="name"
                name="name"
                // value={values.name}
                // handleChange={handleChange}
                horizontal
                placeholder="Udaya"
                className="input"
              />
              <h4 className="title">Employee NIC : </h4>
              <FormRow
                type="name"
                name="link"
                // value={values.link}
                // handleChange={handleChange}
                horizontal
                placeholder="2345646467V"
                className="input"
              />
              <h4 className="title">Employee Mobile : </h4>
              <FormRow
                type="name"
                name="email"
                // value={values.email}
                // handleChange={handleChange}
                horizontal
                placeholder="0777364010"
                className="input"
              />
              <h4 className="title">Employee Address : </h4>
              <FormRow
                type="name"
                name="password"
                // value={values.password}
                // handleChange={handleChange}
                horizontal
                placeholder="address"
                className="input"
              />
              <br />
              <button className="btn btn-submit" type="submit">
                submit
              </button>
            </form>
          </div>

          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
            <h3>Packing</h3>
            <form>
              <h4 className="title">Employee Name : </h4>
              <FormRow
                type="name"
                name="name"
                // value={values.name}
                // handleChange={handleChange}
                horizontal
                placeholder="Udaya"
                className="input"
              />
              <h4 className="title">Employee NIC : </h4>
              <FormRow
                type="name"
                name="link"
                // value={values.link}
                // handleChange={handleChange}
                horizontal
                placeholder="2345646467V"
                className="input"
              />
              <h4 className="title">Employee Mobile : </h4>
              <FormRow
                type="name"
                name="email"
                // value={values.email}
                // handleChange={handleChange}
                horizontal
                placeholder="0777364010"
                className="input"
              />
              <h4 className="title">Employee Address : </h4>
              <FormRow
                type="name"
                name="password"
                // value={values.password}
                // handleChange={handleChange}
                horizontal
                placeholder="address"
                className="input"
              />
              <br />
              <button className="btn btn-submit" type="submit">
                submit
              </button>
            </form>
          </div>

          <div
            className={
              toggleState === 5 ? "content  active-content" : "content"
            }
          >
            <h3>Line</h3>
            <form>
              <h4 className="title">Shop owner NIC : </h4>
              <FormRow
                type="name"
                name="name"
                // value={values.name}
                // handleChange={handleChange}
                horizontal
                placeholder="12332112V"
                className="input"
              />
              <h4 className="title">Owner Name : </h4>
              <FormRow
                type="name"
                name="link"
                // value={values.link}
                // handleChange={handleChange}
                horizontal
                placeholder="udaya1"
                className="input"
              />
              <h4 className="title">Location : </h4>
              <FormRow
                type="name"
                name="email"
                // value={values.email}
                // handleChange={handleChange}
                horizontal
                placeholder="address"
                className="input"
              />
              <h4 className="title">Mobile Number : </h4>
              <FormRow
                type="name"
                name="password"
                // value={values.password}
                // handleChange={handleChange}
                horizontal
                placeholder="0777364010"
                className="input"
              />
              <h4 className="title">Km Count : </h4>
              <FormRow
                type="name"
                name="password"
                // value={values.password}
                // handleChange={handleChange}
                horizontal
                placeholder="Rs.100.00"
                className="input"
              />
              <br />
              <button className="btn btn-submit" type="submit">
                submit
              </button>
            </form>
          </div>

          <div
            className={
              toggleState === 6 ? "content  active-content" : "content"
            }
          >
            <h3>Transport</h3>
            <form>
              <h4 className="title">Employee Name : </h4>
              <FormRow
                type="name"
                name="name"
                // value={values.name}
                // handleChange={handleChange}
                horizontal
                placeholder="Udaya"
                className="input"
              />
              <h4 className="title">Employee NIC : </h4>
              <FormRow
                type="name"
                name="link"
                // value={values.link}
                // handleChange={handleChange}
                horizontal
                placeholder="2345646467V"
                className="input"
              />
              <h4 className="title">Employee Mobile : </h4>
              <FormRow
                type="name"
                name="email"
                // value={values.email}
                // handleChange={handleChange}
                horizontal
                placeholder="0777364010"
                className="input"
              />
              <h4 className="title">Employee Address : </h4>
              <FormRow
                type="name"
                name="password"
                // value={values.password}
                // handleChange={handleChange}
                horizontal
                placeholder="address"
                className="input"
              />
              <br />
              <button className="btn btn-submit" type="submit">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-left: 2rem;
  min-height: 100vh;
  .form {
    width: 60vw;
    max-width: 1120px;
    background: var(--clr-grey-8);
    box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
      6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
      12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
      22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
      41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
      100px 100px 80px rgba(0, 0, 0, 0.07);
    padding: 2rem 2.5rem;
    margin: 1rem auto;
    border-radius: 20px;
  }
  .form-label {
    display: block;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    letter-spacing: 1px;
  }
  .form-input,
  .form-textarea {
    width: 100%;
    padding: 0.375rem 0.75rem;
    background: var(--clr-grey-10);
    border: 1px solid var(--clr-grey-5);
    border-radius: 20px;
    height: 100%;
    font-size: 1rem;
    padding: 0.5rem 4rem;
    text-align: center;
    border-radius: 20px;
    margin-top: -10rem;
  }
  .form-row {
    margin-bottom: 1rem;
  }
  .form-textarea {
    height: 7rem;
  }
  ::placeholder {
    font-family: inherit;
    /* color: var(--grey-400) !important; */
    letter-spacing: var(--letterSpacing);
  }
  .text {
    position: relative;
    text-align: center;
    align-items: center;
  }

  .title {
    padding: 1rem;
  }
  .btn-submit {
    padding: 1rem;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    margin-top: 0;
    padding: 0;
  }

  body {
    background: #fff;
  }
  .container {
    position: relative;
    width: 50%;
    height: 100%;
    background: #f1f1f1;
    margin: 100px auto 0;
    word-break: break-all;
    border: 1px solid rgba(0, 0, 0, 0.274);
  }
  .bloc-tabs {
    display: flex;
  }
  .tabs {
    padding: 15px;
    text-align: center;
    width: 50%;
    background: rgba(128, 128, 128, 0.075);
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.274);
    box-sizing: content-box;
    position: relative;
    outline: none;
  }
  .tabs:not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.274);
  }

  .active-tabs {
    background: white;
    border-bottom: 1px solid transparent;
  }

  .active-tabs::before {
    content: "";
    display: block;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% + 2px);
    height: 5px;
    background: rgb(88, 147, 241);
  }

  button {
    border: none;
  }
  .content-tabs {
    flex-grow: 1;
  }
  .content {
    background: white;
    padding: 20px;
    width: 100%;
    height: 100%;
    display: none;
  }
  .content h2 {
    padding: 0px 0 5px 0px;
  }
  .content hr {
    width: 100px;
    height: 2px;
    background: #222;
    margin-bottom: 5px;
  }
  .content p {
    width: 100%;
    height: 100%;
  }
  .active-content {
    display: block;
  }
`;

export default MemberRegisterTabs;
