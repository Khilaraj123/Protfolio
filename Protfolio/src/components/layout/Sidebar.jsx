import {
    FaEnvelope, FaPhone, FaMapMarketAlt, FaGlobe,
    FaWhatsapp, FaUser, FaGithub, FaLinkedin, FaAward,
    FaHeart, FaUsers, FaGraduationCap
} from 'react-icons/fa';
import { profile, languages, certifications, interests } from "../../data";
import '../../styles/Sidebar.css';


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="profile-img">
                <img src={profile.image} alt={profile.name} />
            </div>
            <div className="sidebar-name">{profile.name}</div>
            <div className="sidebar-title">{profile.title}</div>
            <div className="sidebar-tagline">Building product that scale.</div>
            <div className="sidebar-divider" />

            {/* Bio */}
            <SidebarSection icon={<FaUser />} title="About">
                <p className="sidebar-bio">
                   {profile.bio}  
                </p>
            </SidebarSection>

            {/* contact */}
            <SidebarSection icon={<FaPhone /> title="Contacts">
                <ContactItem></ContactItem>
</SidebarSection>
        </div>
    )
}