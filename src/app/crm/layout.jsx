import PageLocker from "@/components/molecules/PageLocker"

const CrmLayout = ({ children }) => {
    return (
        <PageLocker>
            {children}
        </PageLocker>
    )
}

export default CrmLayout
