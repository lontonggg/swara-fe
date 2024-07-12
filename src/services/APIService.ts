class APIService {
    static BASE_URL = 'http://172.20.10.2:8000'

    static async register(userData: object){
        try {
            const response = await fetch(`${this.BASE_URL}/auth/signup/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                
                body: JSON.stringify(userData)
            })
            if (response.status === 400) {
                const errorResponse = await response.json()
                throw new Error(errorResponse.Email[0] || 'Failed to register')
            }
            return response.json()
        } catch (error) {   
            throw error;
        }
    }   

    static async login(userData: object) {
        try {
          const response = await fetch(`${this.BASE_URL}/auth/login/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });
    
          if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message || 'Failed to login');
          }
    
          return response.json();
        } catch (error) {
          throw error;
        }
      }

    static async getIssues() {
        try {
            const response = await fetch(`${this.BASE_URL}/angkat-isu/`)
            if (!response.ok) {
                throw new Error('Failed to fetch issues')
            }
            return response.json()
        } catch (error) {
            throw error
        }
    }
} export default APIService;