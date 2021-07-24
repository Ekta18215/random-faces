import react from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import {FaEnvelope, FaMapMarkerAlt, FaPhone} from "react-icons/fa";

const Mycard = ({details}) => {
    return(
        <Card>
            <CardBody className="text-center">
                <img height="150" width="150" className="rounded-circle img-thumbnail border-danger"
                src={details.picture?.medium}/>
                <CardTitle className="text-primary">
                    <h1>
                        <span className="p-2">{details.name?.title}.</span>
                        <span className="p-2">{details.name?.first}</span>
                        <span>{details.name?.last}</span>
                    </h1>
                </CardTitle>
                <CardText>
                    <FaMapMarkerAlt/>
                    {details.location?.city}
                    <p><FaPhone/>{details.phone}</p>
                    <p className="font-bold"><FaEnvelope/>{details.email}</p>
                </CardText>

            </CardBody>
        </Card>

    )

}
export default Mycard;