import { Avatar } from "../../../../../Components/Avatar";
import { useWhatsApp } from "../../../../../Contexts/WhatsAppContext";
import { Container } from "./styles";
import { BsCameraFill } from "react-icons/bs";


export const InfosMid = (props: any) => {
    const { whats } = useWhatsApp()

    return (
        <Container>
            <div className="infosMidTop">
                <Avatar id={whats?.picture} size={130} />
                
                <div className="cameraIconDiv">
                    <BsCameraFill className="cameraIcon" />
                </div>
            </div>
        </Container>
    )
}