import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

import Logo from "../../Resources/Images/thereal.svg";
import Alert from "../Alert";
import * as Styles from "../../Styles/App";

import * as Services from "../../Services/Server";

const Lookup = ({ state, setState }) => {
    const [email, setEmail] = useState("");
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        if (alert !== false) {
            var timer = setTimeout(() => {
                setAlert(false);
            }, 5000);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [alert]);

    const History = useHistory();

    const handleTyping = (e) => setEmail(e.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        Services.refreshCustomers(email.toLowerCase()).then((res) => {
            console.log("Lookup response: ", res);
            setState({ ...state, customers: res.data.customers });
            if (res.data.customers.length === 0) {
                setAlert("Email not found on server.");
            } else {
                History.push("/lookup/devices");
            }
        });
    };

    return (
        <header style={Styles.CheckIn}>
            <div style={Styles.TransBackground}>
                <div style={Styles.Form}>
                    <Link to="/">
                        <img
                            style={Styles.AppLogo}
                            src={Logo}
                            alt="company logo"
                        />
                    </Link>
                    <Alert state={alert} />
                    <Form inverted={true} onSubmit={handleSubmit}>
                        <Form.Field style={Styles.FormInputText}>
                            <h2>
                                Please enter your email to find your
                                information.
                            </h2>
                            <label>Email: </label>
                            <input
                                type="text"
                                required
                                name="email"
                                value={email}
                                onChange={handleTyping}
                            ></input>
                        </Form.Field>
                        <Button type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
        </header>
    );
};

export default Lookup;
