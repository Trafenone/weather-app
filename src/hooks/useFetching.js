import React from "react";
export const useFetching = (callback) => {
    const [error, setError] = React.useState('');

    const fetching = async () => {
        try {
            setError('');
            await callback();
        } catch (e) {
            setError(e.message);
        }
    }

    return [fetching, error];
}