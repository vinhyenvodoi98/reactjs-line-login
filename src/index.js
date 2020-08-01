import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

import axios from 'axios';
import url from 'url';
import qs from 'qs';
import querystring from 'querystring';
import jwt from 'jsonwebtoken';

const maxAge = 120;

export const LineLogin = ({
  clientID,
  clientSecret,
  state,
  nonce,
  scope,
  setPayload,
  setIdToken,
  redirectURI
}) => {
  const lineLogin = () => {
    // Build query string.
    const query = querystring.stringify({
      response_type: 'code',
      client_id: clientID,
      state: state,
      scope: scope,
      nonce: nonce,
      prompt: 'consent',
      max_age: maxAge,
      bot_prompt: 'normal'
    });
    // Build the Line authorise URL.
    const lineAuthoriseURL =
      'https://access.line.me/oauth2/v2.1/authorize?' +
      query +
      '&redirect_uri=' +
      redirectURI;
    // Redirect to external URL.
    window.location.href = lineAuthoriseURL;
  };

  const getAccessToken = (callbackURL) => {
    var urlParts = url.parse(callbackURL, true);
    var query = urlParts.query;
    var hasCodeProperty = Object.prototype.hasOwnProperty.call(query, 'code');
    if (hasCodeProperty) {
      const reqBody = {
        grant_type: 'authorization_code',
        code: query.code,
        redirect_uri: redirectURI,
        client_id: clientID,
        client_secret: clientSecret
      };
      const reqConfig = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };

      axios
        .post(
          'https://api.line.me/oauth2/v2.1/token',
          qs.stringify(reqBody),
          reqConfig
        )
        .then((res) => {
          if (setPayload) setPayload(res.data);

          try {
            const decodedIdToken = jwt.verify(res.data.id_token, clientSecret, {
              algorithms: ['HS256'],
              audience: clientID.toString(),
              issuer: 'https://access.line.me',
              nonce: nonce
            });

            if (setIdToken) setIdToken(decodedIdToken);
          } catch (err) {
            // If token is invalid.
            console.log(err);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getAccessToken(window.location.href);
  }, [clientID]);

  return (
    <div className={styles.App}>
      <div onClick={() => lineLogin()} className={styles.lineButton} />
    </div>
  );
};
