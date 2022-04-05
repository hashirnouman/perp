import React, { useState } from 'react'
import { Select } from '@chakra-ui/react'

const Dropdown = ({ cat, showCategory }) => {

    return (
        <>


            <Select id='sub_category' placeholder='Select Sub-category'>
                <option>United Arab Emirates</option>
                <option>Nigeria</option>
            </Select>
        </>
    )
}

export default Dropdown