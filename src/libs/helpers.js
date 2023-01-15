export const validateURL = (url) => {
	let isValid = true
	let error = ''
	if(url){
		if(/^(https|http)/i.test(url)){
			if(url.indexOf('http://localhost:3000') >= 0){
				isValid = false
				error = 'Tidak menerima localhost'
			}
		} else{
			isValid = false
			error = 'Wajib dimulai dengan http atau https'
		}

		try{
			new URL(url)
		} catch{
			isValid = false
			error = 'Gagal melakukan parsing terhadap URL'
		}
	} else{
		isValid = false
		error = 'URL tidak boleh dikosongkan'
	}

	return {
		isValid, error
	}
}
