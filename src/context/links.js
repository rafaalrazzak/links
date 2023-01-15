import {useState, createContext, useContext, useEffect} from 'react'
import client from "@/graphcms/client";
import REDIRECT from "@/graphcms/redirect";

const Context = createContext(null);

const Provider = ({children}) => {
	const [links, setLinks] = useState({loading: true});


	async function getLinks(){
		const {data: {redirects}} = await client.query({
			query: REDIRECT,
		});
		setLinks(redirects);
	}

	useEffect(() => {
		getLinks().then(r => r)
	}, [])


	const exposed = {
		links
	}

	return <Context.Provider value={exposed}>{children}</Context.Provider>;
}

export const useLinks = () => useContext(Context);
export default Provider;