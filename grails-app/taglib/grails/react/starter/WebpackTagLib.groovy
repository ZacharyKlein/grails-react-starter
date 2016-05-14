package grails.react.starter

import grails.util.Environment
import org.springframework.beans.factory.annotation.Value

class WebpackTagLib {

    static namespace = "webpack"
    static defaultEncodeAs = [taglib:'none']

    static String DEFAULT_BUNDLE_NAME = 'bundle.js'

    @Value('${webpack.dev-server.url}')
    String devServerUrl

    @Value('${webpack.dev-server.enabled}')
    Boolean devServerEnabled

    def bundle = { attrs ->
        def bundleName = attrs.bundle ?: DEFAULT_BUNDLE_NAME

        if(attrs.devServer == 'true' && devServerEnabled && Environment.currentEnvironment == Environment.DEVELOPMENT)
            out << "<script type='text/javascript' src='${devServerUrl}/assets/${bundleName}'></script>"
        else
            out << "${asset.javascript(src: bundleName)}"
    }
}
