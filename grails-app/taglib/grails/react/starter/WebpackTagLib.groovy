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

        if (attrs.devServer == 'true' && devServerEnabled && Environment.isDevelopmentMode() && devServerUp())
            out << "<script type='text/javascript' src='${devServerUrl}/assets/${bundleName}'></script>"
        else
            out << "${asset.javascript(src: bundleName)}"
    }

    private Boolean devServerUp() {
        def url = new URL(devServerUrl);
        HttpURLConnection connection =  (HttpURLConnection) url.openConnection()
        connection.setRequestMethod("HEAD")

        try {
            connection.connect()
            //log.info "Response Code: ${connection.responseCode}"
            return (connection.responseCode == HttpURLConnection.HTTP_OK);
        } catch(e) {
            log.warn "Could not access webpack-dev-server at $devServerUrl - $e"
            return false
        }
    }
}
