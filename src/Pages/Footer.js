import React, { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import './style/footer.css';

function Footer(props) {
    const { currentUser } = useContext(UserContext);
    return (
        <>
            <div className="app__container">
                <div className="footer">
                    <div className="button-score"> <button
                        type="submit"
                        className="btn btn-warning"
                        onClick={() => props.handleSubmit(currentUser.uid)}>
                        save score
                    </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;