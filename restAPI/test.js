const func = (id, title, body) => {
    const a = {
      id: id,
      title: title,
      body: body
    }
    return a
  }
  const arr = [
    { userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: '111' },
    { userId: 1, id: 2, title: 'qui est esse', body: '222' },
    { userId: 1, id: 3, title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut', body: '333' }
  ]
  
  for(let i=0; i<arr.length; i++){
  
    console.log(func(arr[i].id, arr[i].title, arr[i].body))
  }  