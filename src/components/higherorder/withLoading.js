import React from 'react'



let WithLoading = (Conponent) => {
    return function WithLoadingComponent({ isloading, ...props }) {
        if (!isloading) return <Conponent {...props} />;
        return <p>HOld on loading might take sometime</p>
    }
}

export default WithLoading;