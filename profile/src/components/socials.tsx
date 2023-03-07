import { ReactElement } from "react"
import './socials.css'

function Socials(): ReactElement{
    return (
        <div className="socials-bar">
            <button className="email-btn socials-btn">
                <svg width="20" height="20" viewBox="0 -2 20 20" fill="none">
                    <path d="M6.10241 4.70721L12.5 7.90561L18.8976 4.70721C18.8739 4.29957 18.6953 3.9164 18.3983 3.63619C18.1012 3.35598 17.7083 3.19994 17.3 3.20001H7.70001C7.29167 3.19994 6.89876 3.35598 6.60175 3.63619C6.30473 3.9164 6.12609 4.29957 6.10241 4.70721Z" fill="#1E1F26"/>
                    <path d="M18.9 6.49441L12.5 9.69441L6.10001 6.49441V11.2C6.10001 11.6244 6.26858 12.0313 6.56864 12.3314C6.86869 12.6314 7.27566 12.8 7.70001 12.8H17.3C17.7244 12.8 18.1313 12.6314 18.4314 12.3314C18.7314 12.0313 18.9 11.6244 18.9 11.2V6.49441Z" fill="#1E1F26"/>
                </svg>
                Email
            </button>
            <button className="linkedin-btn socials-btn">
                <svg width="16" height="16" fill="none">
                    <path d="M13.7143 0.333344H2.28275C1.75894 0.333344 1.33334 0.764891 1.33334 1.29465V12.7054C1.33334 13.2351 1.75894 13.6667 2.28275 13.6667H13.7143C14.2381 13.6667 14.6667 13.2351 14.6667 12.7054V1.29465C14.6667 0.764891 14.2381 0.333344 13.7143 0.333344ZM5.36311 11.7619H3.38692V5.39882H5.36608V11.7619H5.36311ZM4.37501 4.52977C3.74108 4.52977 3.22918 4.01489 3.22918 3.38394C3.22918 2.75299 3.74108 2.23811 4.37501 2.23811C5.00596 2.23811 5.52084 2.75299 5.52084 3.38394C5.52084 4.01787 5.00894 4.52977 4.37501 4.52977V4.52977ZM12.7708 11.7619H10.7947V8.66668C10.7947 7.92858 10.7798 6.97918 9.76787 6.97918C8.73811 6.97918 8.58037 7.78275 8.58037 8.61311V11.7619H6.60418V5.39882H8.50001V6.26787H8.5268C8.79168 5.76787 9.43751 5.24108 10.3988 5.24108C12.3988 5.24108 12.7708 6.55953 12.7708 8.27382V11.7619V11.7619Z"/>
                    <path d="M2.88692 11.7619V12.2619H3.38691H5.36311H5.36608H5.86608V11.7619V5.39882V4.89882H5.36608H5.02028C5.60892 4.64824 6.02084 4.06488 6.02084 3.38394C6.02084 2.47684 5.28211 1.73811 4.37501 1.73811C3.46409 1.73811 2.72918 2.47769 2.72918 3.38394C2.72918 4.06251 3.14122 4.64765 3.73066 4.89882H3.38691H2.88692V5.39882V11.7619ZM10.2947 11.7619V12.2619H10.7947H12.7708V11.7619H13.2708V8.27382C13.2708 7.40536 13.1821 6.52081 12.7578 5.84788C12.3001 5.12224 11.5223 4.74108 10.3988 4.74108C9.85096 4.74108 9.38041 4.88436 9.00001 5.105V4.89882H8.50001H6.60418H6.10418V5.39882V11.7619V12.2619H6.60418H8.58037H9.08037V11.7619V8.61311C9.08037 8.20716 9.12365 7.91128 9.22571 7.72635C9.27026 7.64564 9.32289 7.59232 9.38996 7.5552C9.45993 7.51649 9.57538 7.47918 9.76787 7.47918C9.94072 7.47918 10.0256 7.51865 10.0686 7.54873C10.1127 7.57964 10.1569 7.63169 10.1957 7.72984C10.2846 7.95479 10.2947 8.27588 10.2947 8.66668V11.7619ZM2.28275 0.833344H13.7143C13.9579 0.833344 14.1667 1.03698 14.1667 1.29465V12.7054C14.1667 12.963 13.9579 13.1667 13.7143 13.1667H2.28275C2.04114 13.1667 1.83334 12.9651 1.83334 12.7054V1.29465C1.83334 1.03493 2.04114 0.833344 2.28275 0.833344Z"/>
                </svg>
                Linkedin
            </button>
        </div>
    )
}

export default Socials