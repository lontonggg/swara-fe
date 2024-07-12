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

    static async getIssues(token: string) {
        try {
            const response = await fetch(`${this.BASE_URL}/angkat-isu/` , {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (!response.ok) {
                throw new Error('Failed to fetch issues')
            }
            return response.json()
        } catch (error) {
            throw error
        }
    }
    static async likeIssue(token: string, issueId: string) {
        try {
            const response = await fetch(`${this.BASE_URL}/angkat-isu/like/`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({PostId: issueId})
            })
            if (response.status == 404) {
                throw new Error('Failed to like issue')
            }
            return response.json()
        } catch (error) {
            throw error
        }
    }
    static async dislikeIssue(token: string, issueId: string) {
        try {
            const response = await fetch(`${this.BASE_URL}/angkat-isu/like/`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({PostId: issueId})
            })
            if (response.status == 404) {
                throw new Error('Failed to dislike issue')
            }
            return response.json()
        } catch (error) {
            throw error
        }
    }
    static async postIssue(token: string, issueData: object) {
        try {
            const response = await fetch(`${this.BASE_URL}/angkat-isu/`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(issueData)
            })
            if (response.status == 400) {
                const errorResponse = await response.json()
                throw new Error(errorResponse.message || 'Failed to post issue')
            }
            return response.json()
        } catch (error) {
            throw error
        }
    }
    static async postIssueImages(token: string, issueId: string, formData: FormData) {
      try {
          const response = await fetch(`${this.BASE_URL}/angkat-isu/upload/${issueId}/`, {
              method: 'POST',
              headers: {
                  'Authorization': `Bearer ${token}`,
              },
              body: formData
          });
          if (response.status == 400) {
              const errorResponse = await response.json();
              throw new Error(errorResponse.message || 'Failed to post images');
          }
          return response.json();
      } catch (error) {
          throw error;
      }
  }
} export default APIService;