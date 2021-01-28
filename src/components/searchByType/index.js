import React from 'react'

import { Label, Input } from './styles/search-by-type'

function SearchByType({children , ...restProps}) {
    return <Label {...restProps}>{children}</Label>
}

SearchByType.Input = function SearchByTypeInput({...restProps}) {
    return <Input type="checkbox" {...restProps} />
}

export default SearchByType
