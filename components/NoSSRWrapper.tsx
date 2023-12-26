import dynamic from 'next/dynamic'

const NoSSRWrapper = (props: { children: any }) => <>{props.children}</>

export default dynamic(() => Promise.resolve(NoSSRWrapper), {
	ssr: false,
})
