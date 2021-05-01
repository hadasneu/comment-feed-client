import React from 'react';
import './searchBar.css';

const SearchBar = ({ searchField, setSearchField }) => {
    return (
        <div className="filter">
            <div className="field-wrapper">
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" enableBackground="new 0 0 100 100">
                        <g>
                            <rect x="-192" width="185" height="99"></rect>
                            <rect y="-36" width="100" height="30"></rect>
                            <text transform="matrix(1 0 0 1 66 -19.5)" fill="#000000" fontFamily="'Helvetica'" fontSize="2.4">http://thenounproject.com</text>
                            <text transform="matrix(1 0 0 1 7.166 -24.5)"><tspan x="0" y="0" fill="#000000" fontFamily="'Helvetica-Bold'" fontSize="6.1578">The Noun Project</tspan>
                                <tspan x="1.12" y="4.8" fill="#000000" fontFamily="'Helvetica-Bold'" fontSize="4">Icon Template</tspan></text><text transform="matrix(1 0 0 1 -178.5 10.5)" fill="#000000" fontFamily="'Helvetica-Bold'" fontSize="6.1578">Reminders</text>
                            <line fill="#000000" stroke="#000000" strokeMiterlimit="10" x1="8" y1="-14.5" x2="18" y2="-14.5"></line><line fill="#000000" stroke="#000000" strokeMiterlimit="10" x1="-179" y1="16.5" x2="-162" y2="16.5"></line>
                            <g>
                                <g>
                                    <g>
                                        <rect x="-170.802" y="31.318" fill="#000000" width="8.721" height="8.642"></rect>
                                        <path fill="#000000" d="M-164.455,42.312h4.747v-4.703h-4.747V42.312z M-159.266,42.749h-5.63V37.17h5.63V42.749      L-159.266,42.749z M-166.221,44.062h8.279v-8.203h-8.279V44.062L-166.221,44.062z M-157.5,44.5h-9.163v-9.079h9.163V44.5      L-157.5,44.5z"></path>
                                        <polygon fill="#000000" points="-166.149,44.133 -166.292,43.991 -158.013,35.787 -157.871,35.929     "></polygon>
                                    </g>
                                </g>
                            </g>
                            <rect x="-179" y="58" fill="none" width="35" height="32.5"></rect>
                            <rect x="-136.5" y="58" fill="none" width="35" height="32.5"></rect>
                            <rect x="-94" y="58" fill="none" width="35" height="32.5"></rect><text transform="matrix(1 0 0 1 -94 60.1572)"><tspan x="0" y="0" fill="#000000" fontFamily="'Helvetica-Bold'" fontSize="3">Ungroup</tspan><tspan x="0" y="5" fill="#000000" fontFamily="'Helvetica'" fontSize="2.4">If your design has more than one </tspan><tspan x="0" y="8" fill="#000000" fontFamily="'Helvetica'" fontSize="2.4">shape, make sure to ungroup</tspan></text><rect x="-50" y="58" fill="none" width="35" height="32.5"></rect>
                            <rect x="-126.514" y="34.815" fill="#000000" width="10.261" height="10.185"></rect>
                            <rect x="-126.477" y="31.766" fill="#000000" width="0.522" height="2.337"></rect>
                            <rect x="-116.812" y="31.766" fill="#000000" width="0.523" height="2.337"></rect>
                            <rect x="-127" y="32.337" fill="#000000" width="11.233" height="0.572"></rect>
                            <g>
                                <rect x="-83.805" y="33.844" fill="#000000" width="10.305" height="10.156"></rect>
                                <rect x="-76.809" y="28.707" fill="#000000" width="3.308" height="3.261"></rect>
                            </g>
                            <rect x="-178.5" y="22.5" fill="#000000" stroke="#000000" strokeMiterlimit="10" width="30" height="30"></rect>
                            <rect x="-136.5" y="22.5" fill="#000000" stroke="#000000" strokeMiterlimit="10" width="30" height="30"></rect>
                            <rect x="-93.5" y="22.5" fill="#000000" stroke="#000000" strokeMiterlimit="10" width="30" height="30"></rect>
                            <rect x="-49.5" y="22.5" fill="#000000" stroke="#000000" strokeMiterlimit="10" width="30" height="30"></rect>
                        </g>
                        <g>
                            <path d="M81.405,76.481L62.013,57.089c3.19-4.216,5.085-9.467,5.085-15.162c0-13.891-11.26-25.151-25.151-25.151   c-13.891,0-25.151,11.26-25.151,25.151c0,13.891,11.26,25.151,25.151,25.151c5.675,0,10.91-1.881,15.118-5.051l19.397,19.396   c1.64,1.64,4.074,1.861,5.439,0.497C83.267,80.556,83.044,78.12,81.405,76.481z M41.947,60.845   c-10.446,0-18.916-8.471-18.916-18.917c0-10.448,8.47-18.917,18.916-18.917s18.917,8.47,18.917,18.917   C60.863,52.374,52.393,60.845,41.947,60.845z"></path>
                        </g>
                    </svg>
                </i>
                <input
                    className="field with-icon"
                    type="text"
                    placeholder="Filter"
                    value={searchField}
                    onChange={event => setSearchField(event.target.value)}
                />
            </div>

        </div>
    );
}

export default SearchBar;