import { Link } from "react-router-dom";
import { IMAGES } from "../../constant/Theme";
import { useEffect, useState } from "react";
import PageTitle from "../../layouts/PageTitle";
import { chatmediadata, chatmediadata2, chatpagedata } from "../../constant/Alldata";
import { tr } from "date-fns/locale";

function Chat() {
    useEffect(() => {
        const element = document.querySelector(".content-body");
        element.classList.add("chat-height");
    }, [])
    const [active, setActive] = useState(false);
    return (
        <>
            <PageTitle activeMenu="Chat" motherMenu="Home" pageContent={"Chat"} />
            <div className="container">
                <div className="row gx-0">
                    <div className="col-xl-12">
                        <div className="card overflow-hidden">
                            <div className="card-body p-0">
                                <div className="row gx-0">
                                    <div className={`col-xl-3 col-lg-6 col-sm-5 chat-border mobile-chat chat-left-area ${active ? "active" : ""}`}>
                                        <div className="chat-p shaprate">
                                            <div className="d-flex align-items-center">
                                                <img src={IMAGES.contactd1}
                                                    className="avatar avatar-md rounded-circle" alt="" />
                                                <div className="ms-2">
                                                    <h6 className="mb-0">K kumar Gaur</h6>
                                                    <span>web Designer</span>
                                                </div>
                                            </div>
                                            <div className="icon-box bg-primary-light">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M17.3389 6.35305L16.8202 5.45298C16.3814 4.69138 15.4089 4.42864 14.6463 4.86564V4.86564C14.2832 5.07949 13.85 5.14017 13.4422 5.03428C13.0344 4.92839 12.6855 4.66464 12.4723 4.30118C12.3352 4.07016 12.2616 3.80704 12.2588 3.53841V3.53841C12.2711 3.10773 12.1087 2.69038 11.8083 2.38143C11.508 2.07249 11.0954 1.89826 10.6646 1.89844H9.61956C9.19745 1.89843 8.79274 2.06664 8.49498 2.36583C8.19722 2.66502 8.03096 3.07053 8.03299 3.49264V3.49264C8.02048 4.36415 7.31038 5.06405 6.43879 5.06396C6.17016 5.06117 5.90703 4.98749 5.67601 4.85038V4.85038C4.91336 4.41339 3.94091 4.67612 3.5021 5.43772L2.94527 6.35305C2.50699 7.1137 2.76615 8.08555 3.52498 8.52697V8.52697C4.01823 8.81174 4.32209 9.33803 4.32209 9.90759C4.32209 10.4771 4.01823 11.0034 3.52498 11.2882V11.2882C2.76711 11.7267 2.50767 12.6961 2.94527 13.4545V13.4545L3.47158 14.3622C3.67719 14.7332 4.02215 15.007 4.43014 15.1229C4.83813 15.2389 5.27551 15.1875 5.6455 14.9801V14.9801C6.00921 14.7678 6.44264 14.7097 6.84943 14.8185C7.25622 14.9274 7.60268 15.1942 7.81178 15.5598C7.94889 15.7908 8.02257 16.0539 8.02536 16.3225V16.3225C8.02536 17.203 8.73911 17.9167 9.61956 17.9167H10.6646C11.5421 17.9168 12.2546 17.2076 12.2588 16.3302V16.3302C12.2567 15.9067 12.424 15.5001 12.7234 15.2006C13.0229 14.9012 13.4295 14.7339 13.853 14.736C14.121 14.7431 14.383 14.8165 14.6157 14.9495V14.9495C15.3764 15.3878 16.3482 15.1287 16.7897 14.3698V14.3698L17.3389 13.4545C17.5514 13.0896 17.6098 12.655 17.501 12.247C17.3922 11.839 17.1252 11.4912 16.7592 11.2806V11.2806C16.3931 11.07 16.1261 10.7222 16.0173 10.3142C15.9085 9.90613 15.9669 9.47156 16.1794 9.10668C16.3177 8.86532 16.5178 8.66521 16.7592 8.52697V8.52697C17.5134 8.08579 17.772 7.11962 17.3389 6.36068V6.36068V6.35305Z"
                                                        stroke="#000" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <ellipse cx="10.1459" cy="9.90749" rx="2.1968" ry="2.1968"
                                                        stroke="#000" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="c-list">
                                            <div className="input-group search-area">
                                                <input type="text" className="form-control" placeholder="Search " />
                                                <span className="input-group-text">
                                                <Link to={"#"}>
                                                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="8.82495" cy="9.32491" r="6.74142" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M13.5137 14.3638L16.1568 16.9999" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </Link></span>
                                            </div>
                                        </div>
                                        <div className="people-list dz-scroll">
                                            {chatpagedata.map((item, index) => (
                                                <div className="chat-p style-1" key={index}>
                                                    <div className={`d-flex ${item.columnstand}`}>
                                                        <img src={item.image}
                                                            className="avatar avatar-md rounded-circle" alt="" />
                                                        <div className="ms-2">
                                                            <h6 className="mb-0">{item.name}</h6>
                                                            <span><strong>You:</strong> Welcome back </span>
                                                        </div>
                                                    </div>
                                                    <span>{item.time} mIn</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-6 col-sm-7 chat-border">
                                        <div className="chat-p shaprate">
                                            <div className="d-flex align-items-center">
                                                <img src={IMAGES.contactd1}
                                                    className="avatar avatar-md rounded-circle" alt="" />
                                                <div className="ms-2">
                                                    <h6 className="mb-0">K kumar Gaur</h6>
                                                    <span>
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="7" cy="7" r="6" fill="#3AC977" stroke="white" strokeWidth="2" />
                                                        </svg> online
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="chat-admin">
                                                <div className={`icon-box bg-info mx-1 chat-toggle ${active ? "active" : ""}`} onClick={() => setActive(!active)}>
                                                    <i className="fa-solid fa-list-ul text-white" />
                                                </div>
                                                <div className="icon-box bg-success-light mx-1">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_505_3755)">
                                                            <path d="M18.3333 14.0999V16.5999C18.3343 16.832 18.2867 17.0617 18.1937 17.2744C18.1008 17.487 17.9644 17.6779 17.7934 17.8348C17.6224 17.9917 17.4205 18.1112 17.2006 18.1855C16.9808 18.2599 16.7478 18.2875 16.5167 18.2666C13.9523 17.988 11.4892 17.1117 9.32498 15.7083C7.31151 14.4288 5.60443 12.7217 4.32499 10.7083C2.91663 8.53426 2.04019 6.05908 1.76665 3.48325C1.74583 3.25281 1.77321 3.02055 1.84707 2.80127C1.92092 2.58199 2.03963 2.38049 2.19562 2.2096C2.35162 2.03871 2.54149 1.90218 2.75314 1.80869C2.9648 1.7152 3.1936 1.6668 3.42499 1.66658H5.92499C6.32941 1.6626 6.72148 1.80582 7.02812 2.06953C7.33476 2.33324 7.53505 2.69946 7.59165 3.09992C7.69717 3.89997 7.89286 4.68552 8.17499 5.44158C8.2871 5.73985 8.31137 6.06401 8.24491 6.37565C8.17844 6.68729 8.02404 6.97334 7.79998 7.19992L6.74165 8.25825C7.92795 10.3445 9.65536 12.072 11.7417 13.2583L12.8 12.1999C13.0266 11.9759 13.3126 11.8215 13.6243 11.755C13.9359 11.6885 14.26 11.7128 14.5583 11.8249C15.3144 12.107 16.0999 12.3027 16.9 12.4083C17.3048 12.4654 17.6745 12.6693 17.9388 12.9812C18.203 13.2931 18.3435 13.6912 18.3333 14.0999Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_505_3755">
                                                                <rect width="20" height="20" fill="#000" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="icon-box bg-primary-light mx-1">
                                                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.561 1.172C19.4256 1.08045 19.2699 1.02347 19.1074 1.00604C18.945 0.988603 18.7807 1.01125 18.629 1.072L14.954 2.542C14.8449 1.83596 14.4875 1.19201 13.946 0.726018C13.4045 0.260026 12.7144 0.00258053 12 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V11C0 11.7956 0.316071 12.5587 0.87868 13.1213C1.44129 13.6839 2.20435 14 3 14H12C12.7143 13.9975 13.4042 13.7402 13.9457 13.2744C14.4872 12.8086 14.8447 12.1649 14.954 11.459L18.629 12.929C18.7807 12.9896 18.945 13.0121 19.1075 12.9946C19.27 12.977 19.4257 12.9199 19.561 12.8282C19.6962 12.7365 19.807 12.6131 19.8835 12.4687C19.9601 12.3244 20.0001 12.1634 20 12V2C20 1.83663 19.96 1.67573 19.8835 1.53139C19.807 1.38705 19.6962 1.26365 19.561 1.172ZM12 12H3C2.73478 12 2.48043 11.8946 2.29289 11.7071C2.10536 11.5196 2 11.2652 2 11V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H12C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3V11C13 11.2652 12.8946 11.5196 12.7071 11.7071C12.5196 11.8946 12.2652 12 12 12ZM18 10.523L15 9.323V4.677L18 3.477V10.523Z" fill="#000" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-box-area style-2 dz-scroll" id="chartBox2">
                                            <span className="text-center d-block mb-4">25/04/2024</span>
                                            <div className="media justify-content-end align-items-end ms-auto">
                                                <div className="message-sent w-auto">
                                                    <p>Even the all-powerful Pointing has no control about the blind
                                                        texts it is an<br />
                                                        almost unorthographic life One day however a small line of
                                                        blind text by the <br />
                                                        name of Lorem Ipsum decided to leave for the far World of
                                                        Grammar. Aenean <br />
                                                        vulputate eleifend tellus. Aenean leo ligula.</p>
                                                    <span className="fs-12 mb-3 d-block">9.30 AM</span>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <div className="message-received w-auto">
                                                    <div className="d-flex">
                                                        <img src={IMAGES.contact2}
                                                            className="avatar rounded-circle" alt="" />
                                                        <div className="ms-1 text">
                                                            <p className="mb-1">Good morning</p>
                                                            <p className="mb-3">Can you arrange schedule for next
                                                                meeting?</p>
                                                            <span>12:45 PM</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <span className="text-center d-block mb-4">Today</span>
                                            <div className="media justify-content-end align-items-end ms-auto">
                                                <div className="message-sent w-auto">
                                                    <p className="mb-1">Very Good morning</p>
                                                    <p className="mb-1">Okay, I’ll arrange it soon. i noftify you when
                                                    </p>
                                                    <p className="mb-1">Very Good morning</p>
                                                    <p>Okay, I’ll arrange it soon. i noftify you when it’s done<br />
                                                        +91-235 2574 2566<br />
                                                        kk Sharma<br />
                                                        pan card eeer2063i</p>
                                                    <span className="fs-12">9.30 AM</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="message-send style-2">
                                            <div className="type-massage style-1">
                                                <div className="input-group">
                                                    <textarea rows="1" className="form-control" placeholder="Hello Hanuman..."></textarea>
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-primary  p-2 d-flex align-items-center"> Send
                                                <svg className="ms-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.555 5.44976L6.73936 9.30612L2.39962 6.59178C1.77783 6.20276 1.90718 5.25829 2.61048 5.05262L12.9142 2.03518C13.5582 1.84642 14.155 2.44855 13.9637 3.09466L10.9154 13.3912C10.7066 14.0955 9.76747 14.2213 9.38214 13.5968L6.73734 9.3068" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 file-media dz-scroll">
                                        <div className="chat-meadia">
                                            <h4 className="card-title">Media</h4>
                                            <ul className="image-list">
                                                {chatmediadata.map((item, index) =>
                                                    <li key={index}><Link to={"#"}><img src={item} alt="" /></Link></li>
                                                )}
                                                <li className="all-media"><Link to={"#"}  >
                                                    <span>50+</span>
                                                    <img src={IMAGES.chat5} alt="" /></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="chat-meadia">
                                            <h4 className="card-title">Files</h4>
                                            <div className="file-list row">
                                                {chatmediadata2.map((item, index) =>
                                                    <div className="text-center col-xl-4 col-6 filie-l-icon" key={index}>
                                                        <img src={item.image} alt="" />
                                                        <h5> {item.name}</h5>
                                                        <small>Size:{item.size}MB</small>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat;