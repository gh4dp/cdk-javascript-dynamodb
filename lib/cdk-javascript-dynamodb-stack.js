const cdk = require('@aws-cdk/core');
const dynamo = require('@aws-cdk/aws-dynamodb')



class CdkJavascriptDynamodbStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    new dynamo.Table('this', 'Items', {
      billingMode: dynamo.BillingMode.PAY_PER_REQUEST,
      partitionKey: { name: 'id', type: dynamo.AttributeType.STRING }
    })
  }
}

module.exports = { CdkJavascriptDynamodbStack }
