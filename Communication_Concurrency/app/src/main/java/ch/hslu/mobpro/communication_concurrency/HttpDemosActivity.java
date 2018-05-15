package ch.hslu.mobpro.communication_concurrency;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class HttpDemosActivity extends AppCompatActivity {

    private static final String URL_TEXT    = "http://wherever.ch/hslu/loremIpsum.txt";
    private static final String URL_IMAGE   = "http://wherever.ch/hslu/homer.jpg";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_http_demos);
    }
}
