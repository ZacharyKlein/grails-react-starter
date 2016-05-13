package grails.react.starter

import grails.util.Environment
import org.springframework.beans.factory.annotation.Value

class WebpackTagLib {

    static namespace = "webpack"
    static defaultEncodeAs = [taglib:'none']
    static String DEFAULT_BUNDLE_NAME = 'bundle.js'

    @Value('${webpack.dev-server.url}')
    String webpackUrl

    def bundle = { attrs ->
        def bundleName = attrs.bundle ?: DEFAULT_BUNDLE_NAME

        if(Environment.currentEnvironment == Environment.DEVELOPMENT && webpackUrl)
            out << "<script type='text/javascript' src='${webpackUrl}/assets/${bundleName}' />"
        else
            out << "${asset.javascript(src: bundleName)}"
    }
}
