Create a `.env` file

```sh
###########################################################################################################
################################################ Variables ################################################
###########################################################################################################

TLD="com"
NODE_ENV="development"


# OAuth app credentials
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""


###########################################################################################################
################################################ Constants ################################################
###########################################################################################################

# Domain configuration
REACT_APP_CLIENT_HOST=
REACT_APP_CLIENT_PORT=

REACT_APP_CLIENT_URL=${REACT_APP_CLIENT_HOST}:${REACT_APP_CLIENT_PORT}

# Server configuration
SUCCESS_REDIRECT_URL="${WEBSITE_URL}/sign-in-success"
FAILURE_REDIRECT_URL="${WEBSITE_URL}/sign-in-failure"

```
