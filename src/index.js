import { drawPage } from './drawPage.js'
import { useTabButton } from './useTabButton.js'

import { addProductList } from './addProductList.js'

import { addVendingMachineCharge } from './addVendingMachineCharge.js'

    drawPage()

    function gameStart(){
        document.addEventListener('click',function(e){
            useTabButton(e)
        })
        //상품관리 추가하기 버튼 클릭
        const $productAddButton = document.querySelector('#product-add-button')
        $productAddButton.addEventListener('click', addProductList)        
        
        const $vendingMachineChargeButton = document.querySelector('#vending-machine-charge-button')

        $vendingMachineChargeButton.addEventListener('click', ()=>{addVendingMachineCharge()})
    }


    window.onload = function(){
        gameStart()
    }
