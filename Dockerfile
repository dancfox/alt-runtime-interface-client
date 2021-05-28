# Define custom function directory
ARG FUNCTION_DIR="/function"

FROM node:12-buster as build-image

# Include global arg in this stage of the build
ARG FUNCTION_DIR

# Install aws-lambda-cpp build dependencies
RUN apt-get update && \
    apt-get install -y \
    g++ \
    make \
    cmake \
    unzip \
    libcurl4-openssl-dev

# Copy function code
RUN mkdir -p ${FUNCTION_DIR}

WORKDIR ${FUNCTION_DIR}

# If the dependency is not in package.json uncomment the following line
RUN npm install aws-lambda-ric
RUN npm install

COPY myFunction/* ${FUNCTION_DIR}

# dfox: 05- overwriting these two files in the RIC
COPY ./js/UserFunction.js ./node_modules/aws-lambda-ric/lib/utils/
COPY ./js/index.js ./node_modules/aws-lambda-ric/lib/

# Grab a fresh slim copy of the image to reduce the final size
FROM node:12-buster-slim

# Include global arg in this stage of the build
ARG FUNCTION_DIR

# Set working directory to function root directory
WORKDIR ${FUNCTION_DIR}

# Copy in the built dependencies
COPY --from=build-image ${FUNCTION_DIR} ${FUNCTION_DIR}

ENTRYPOINT ["/usr/local/bin/npx", "aws-lambda-ric"]
CMD ["app.handler"]
