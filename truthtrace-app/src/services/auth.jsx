import { Authenticator } from '@aws-amplify/ui-react'

async function signOut() {
  <Authenticator>
  {({ signOut, user }) => (
              <button onClick={signOut}>Sign out</button>
                  
      )}
      </Authenticator>
}

async function signIn() {
      
  <Authenticator>
  {({ signIn, user }) => (
              <button onClick={signIn}>Sign In</button>
                  
      )}
      </Authenticator>
}

export { signIn, signOut };