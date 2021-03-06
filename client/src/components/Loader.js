import React from 'react';

const Loader = () => {
    return (
        <div className="preloader spinner-layer spinner-red">
            <div className="circle-clipper left">
                <div className="circle" />
            </div>
            <div className="gap-patch">
                <div className="circle" />
            </div>
            <div className="circle-clipper right">
                <div className="circle" />
            </div>
        </div>
    );
}

export default Loader;