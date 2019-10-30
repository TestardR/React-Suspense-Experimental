import React, {Fragment, useTransition} from 'react'

export default function MyButton({children, onClick, ...props}) {
    const [startTransition, isPending] = useTransition({
        timeoutMs: 2000
    })
    return (
        <Fragment>
            <button {...props} onClick={() => {
                startTransition(() => {
                    onClick();
                })
            }} disabled={isPending}>
                {children}
            </button>
            {isPending ? <div>Loading...</div> : null}
        </Fragment>
    )
}
