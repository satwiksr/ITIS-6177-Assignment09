def lambda_handler(event, context):
    # TODO implement
    # reading the parameter
    parameter = event['queryStringParameters']['keyword']
    return {
        'statusCode': 200,
        'body': 'Satwik Rao(SR) Says ' + parameter
    }