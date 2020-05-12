import React from 'react'

function Footer() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="footer p-3 mt-4 text-center text-light bg-dark">
                        Developed By: 
                        <span className="text-warning font-weigth-normal">
                        Shariizad
                        </span>
                        , Using <i className="fab fa-react" /> React JS &amp; React JS
                        integrated with external movie data API
                        <a
                            href="http://www.omdbapi.com"
                            target="_blank"
                            rel="noopener noreferrer">
                                OMDB
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
