
function main(){
    //E V E N T   L I S T E N E R s
    document.addEventListener('click',function(e){

        if(e.target.id === 'contact_submitButton'){
            sendMail()
        }
    })
}
main()




async function sendMail(){
    const email = getMailDataFromUI()

}

function getMailDataFromUI(){
    const contact_submit_name_input = document.getElementById('contact_submit_name_input')
    const contact_submit_email_input = document.getElementById('contact_submit_email_input')
    const contact_submit_message_input = document.getElementById('contact_submit_message_input')

    const name = contact_submit_name_input.value
    const email = contact_submit_email_input.value
    const message = contact_submit_message_input.value

    return {name,email,message}
}